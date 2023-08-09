export interface UserType {
    loginId: string;
    userName: string;
    email: string;
    phone: string;
    address: string;
}

export interface UserListType {
    data: UserType[];
}