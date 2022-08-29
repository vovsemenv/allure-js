import test from "@playwright/test";
import { Label, LabelName, Link, LinkType, ParameterOptions } from "allure-js-commons";

export class allure {
  // eslint-disable-next-line @typescript-eslint/ban-types
  static addCustomAnnotationsMetadata(type: string, value: string | object) {
    test.info().annotations.push({
      type,
      description: JSON.stringify(value),
    });
  }

  static label(label: Label | Label[]) {
    (Array.isArray(label) ? label : [label]).forEach((val) =>
      this.addCustomAnnotationsMetadata(val.name, val.value),
    );
  }

  static description(value: string) {
    this.addCustomAnnotationsMetadata("description", value);
  }

  static link(link: Link) {
    this.addCustomAnnotationsMetadata("link", link);
  }

  static id(id: string) {
    this.label({
      value: id,
      name: LabelName.AS_ID,
    });
  }

  static epic(epic: string) {
    this.label({
      name: LabelName.EPIC,
      value: epic,
    });
  }

  static feature(epic: string) {
    this.label({
      name: LabelName.FEATURE,
      value: epic,
    });
  }

  static story(story: string): void {
    this.label({
      name: LabelName.STORY,
      value: story,
    });
  }

  static suite(name: string): void {
    this.label({
      name: LabelName.SUITE,
      value: name,
    });
  }

  static parentSuite(name: string) {
    this.label({
      name: LabelName.PARENT_SUITE,
      value: name,
    });
  }

  static addParameter(name: string, value: string, options?: ParameterOptions) {
    this.addCustomAnnotationsMetadata("parameter", {
      name,
      value,
      ...options,
    });
  }

  static subSuite(name: string) {
    this.label({
      name: LabelName.SUB_SUITE,
      value: name,
    });
  }

  static owner(owner: string) {
    this.label({
      name: LabelName.OWNER,
      value: owner,
    });
  }

  static severity(severity: string) {
    this.label({
      name: LabelName.SEVERITY,
      value: severity,
    });
  }

  static tag(...tags: string[]) {
    for (const tag of tags) {
      this.label({
        name: LabelName.TAG,
        value: tag,
      });
    }
  }

  static issue(issueData: Omit<Link, "type">) {
    this.link({
      url: issueData.url,
      name: issueData.name,
      type: LinkType.ISSUE,
    });
  }

  static tms(issueData: Omit<Link, "type">) {
    this.link({
      url: issueData.url,
      name: issueData.name,
      type: LinkType.TMS,
    });
  }
}

export { LabelName } from "allure-js-commons";
