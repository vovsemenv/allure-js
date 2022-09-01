export interface Song {
  name: string;
  duration: number;
  artist: string;
}

export class Playlist {
  constructor(songs: Song[]) {
    this.songs = songs;
  }

  songs: Song[] = [];

  get firstSong(): Song {
    return this.songs[0];
  }

  nextSong(song: Song): Song {
    const songIndex = this.songs.findIndex((val) => val.name === song.name);
    const nextSong = songIndex && this.songs[songIndex + 1];

    return nextSong || song;
  }

  previousSong(song: Song): Song {
    const songIndex = this.songs.findIndex((val) => val.name === song.name);
    const nextSong = songIndex && this.songs[songIndex - 1];

    return nextSong || song;
  }
}

export class Player {
  isPlaying = false;
  playlist: null | Playlist = null;
  currentSong: null | Song = null;

  bannedSongs: Song[] = [];
  likedSongs: Song[] = [];

  constructor(autoPlay: boolean, playlist: Playlist) {
    this.playlist = playlist;
    this.currentSong = this.playlist.firstSong;
    if (autoPlay) {
      this.isPlaying = true;
    }
  }

  play() {
    this.isPlaying = true;
  }

  stop() {
    this.isPlaying = false;
  }

  playNextSong() {
    if (this.playlist && this.currentSong) {
      this.currentSong = this.playlist.nextSong(this.currentSong);
    }
    this.play();
  }

  playPreviousSong() {
    if (this.playlist && this.currentSong) {
      this.currentSong = this.playlist.previousSong(this.currentSong);
    }
    this.play();
  }

  banSong() {
    if (this.playlist && this.currentSong) {
      this.bannedSongs.push(this.currentSong);
    }
  }

  likeSong() {
    if (this.playlist && this.currentSong) {
      this.likedSongs.push(this.currentSong);
    }
  }

  playLikedSongs() {
    this.playlist = new Playlist(this.likedSongs);
    this.currentSong = this.playlist.firstSong;
    this.play();
  }
}
