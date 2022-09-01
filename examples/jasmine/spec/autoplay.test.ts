import { Player, Playlist } from "../player";
import { tracks } from "./test-data";

describe("autoplay", () => {
  allure.owner("eroshenkoam"); // allure-owner:jasmine
  allure.epic("autoplay"); // allure-epic:jasmine

  describe("autoplay false", () => {
    let player: Player;
    beforeEach(() => {
      player = new Player(false, new Playlist(tracks));
    });

    it("expect to not be playing", () => {
      allure.attachment("songs-list.json", JSON.stringify(tracks), {
        contentType: "application/json",
      }); // allure-attachment:jasmine

      expect(player.isPlaying).toBeFalse();
    });

    it("expect to play after play button", () => {
      allure.description(`Description about this test`); // allure-description:jasmine
      player.play();
      expect(player.isPlaying).toBeTrue();

      allure.link(
        "link-to-docs",
        "https://github.com/allure-framework/allure-js"
      ); // allure-description:link
    });

    it("expect to stop after stop button", () => {
      allure.tag("some-tag"); // allure-tag:jasmine
      player.stop();
      expect(player.isPlaying).toBeFalse();
    });
  });

  describe("autoplay true", () => {
    let player: Player;
    beforeEach(() => {
      player = new Player(true, new Playlist(tracks));
    });

    it("expect to be playing", () => {
      allure.feature("autoplay-feature"); // allure-feature:jasmine

      expect(player.isPlaying).toBeTrue();
    });

    it("expect to play after play button", () => {
      allure.severity("blocker"); // allure-severity:jasmine
      player.play();
      expect(player.isPlaying).toBeTrue();
    });

    it("expect to stop after stop button", () => {
      allure.parameter("NODE_VERSION", process.version); // allure-parameter:jasmine
      player.stop();
      expect(player.isPlaying).toBeFalse();
    });
  });
});
