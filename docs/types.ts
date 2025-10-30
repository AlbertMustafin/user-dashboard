interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'admin' | 'user';
  createdAt: Date;
  updatedAt: Date;
}

interface Pagination {
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

interface UsersResponse {
  data: User[];
  pagination: Pagination;
}

interface ErrorResponse {
  message: string;
  code: number;
}

type ApiResponse<T> = {
  data?: T;
  error?: ErrorResponse;
};

type UserUpdatePayload = Partial<Pick<User, 'firstName' | 'lastName' | 'email' | 'role'>>;