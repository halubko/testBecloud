export interface UserInterface {
   id: {
      name: string;
      value: string;
   };
   name: {
      title: string;
      first: string;
      last: string;
   };
   registered: {
      age: number;
   };
   gender: string;
   email: string;
   phone: string;
}

export interface UserResponseInterfaces {
   results: UserInterface[];
   info: {
      results: number;
      page: number;
   };
}

export interface UserFilterInterface {
   gender?: "male" | "female";
   minAge?: number;
   maxAge?: number;
}
