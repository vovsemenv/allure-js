import { Status } from "allure-js-commons";
import { Player, Playlist } from "../player";

import { tracks } from "./test-data";

describe("play-pause", () => {
  it("play-pause", () => {
    let player = new Player(false, new Playlist(tracks));

    allure.step("init player", () => {
      // allure-step:jasmine
      player = new Player(false, new Playlist(tracks));
      const firstTrack = tracks[0].name;
      expect(player.currentSong?.name).toBe(firstTrack);
      allure.logStep(`expect curentSong to be ${firstTrack}`, Status.PASSED); // allure-logStep:jasmine
    });

    allure.step("play", () => {
      expect(player.isPlaying).toBeFalse();
      allure.logStep(`expect player to not play`, Status.PASSED); // allure-logStep:jasmine
      player.play()
      expect(player.isPlaying).toBeTrue();
      allure.logStep(`expect player to play`, Status.PASSED); // allure-logStep:jasmine
    });
  });
});
