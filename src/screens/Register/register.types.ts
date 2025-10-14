export interface RegisterProps {
  navigation: any;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setConfirmPassword: (password: string) => void;
  handleRegister: () => void | Promise<void>;
}
