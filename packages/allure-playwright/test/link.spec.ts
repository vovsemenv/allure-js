/**
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Label, LabelName } from "allure-js-commons";
import { test, expect } from "./fixtures";
test.only("should have link", async ({ runInlineTest }) => {
  const result: Label[] = await runInlineTest(
    {
      "a.test.ts": `
        import { test, expect } from '@playwright/test';
        import { link } from '../../dist/index'
        test('should add epic link', async ({}, testInfo) => {
            link(testInfo, "https://playwright.dev/docs/api/class-page#page-workers");
        });
      `,
    },
    (writer) => {
      return writer.tests.map((t) => t.links);
    },
  );

  expect(result[0]).toContainEqual({
    url: "https://playwright.dev/docs/api/class-page#page-workers",
  });
});
