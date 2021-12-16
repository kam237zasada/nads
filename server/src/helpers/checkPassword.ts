import bcrypt from "bcrypt";

export async function checkPassword(password: string, rightPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, rightPassword);
}