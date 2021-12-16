export interface AddTeacher {
    email: string,
    firstName: string,
    secondName: string,
    password: string,
    confirmPassword: string,
    role: string
}

export interface UpdateTeacher {
    email: string,
    firstName: string,
    secondName: string,
    password: string
}

export interface UpdateTeacherPassword {
    currentPassword: string,
    newPassword: string,
    confirmNewPassword: string
}

export interface TeacherSignIn {
    email: string,
    password: string
}