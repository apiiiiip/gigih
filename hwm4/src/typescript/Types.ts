/* eslint-disable no-unused-vars */
export interface PlaylistlistProps {
  playlistName: string;
  id: string;
  addItem: (id: string) => void;
}

export interface HomepageContext {
  access_token: string;
  listID: string[];
  // eslint-disable-next-line no-unused-vars
  addID: (id: string) => void;
  // eslint-disable-next-line no-unused-vars
  deleteID: (id: string) => void;
  userProfileId: string;
}

export interface UserProfileProps {
  id: string;
}

export interface ImagesProps {
  url: string;
  height: number;
  width: number;
}

export interface ArtistProps {
  name: string;
}

export interface SearchResultResponse {
  id: string;
  album: {
    images: ImagesProps[];
  };
  name: string;
  artists: ArtistProps[];
  duration_ms: number;
}

export interface CreatePlaylistProps {
  id: string;
  name: string;
}

export interface SearchProps {
  handleSearch: () => void;
}
