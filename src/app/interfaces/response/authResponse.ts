export interface AuthResponse {
  status: string;
  data:   Data | boolean;
  login:  boolean;
}

export interface Data {
  firstName: string;
  id:        string;
}
