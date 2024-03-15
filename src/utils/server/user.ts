import { ApiResponse, ChangePasswordInput, LoginUserInput, ResetPasswordInput, SendCodeInput, UpdateUserDetailsInput, User, UserRes, VerifyCodeInput } from "@/types"
import Axios from "../axios";
import _ from "lodash"

export const UPDATE_USER = async (info: UpdateUserDetailsInput, token: string) => {
    try {
        const response: ApiResponse<UserRes> = await Axios({
            method: "PUT",
            url: `/auth/update-details`,
            data: info,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (response.status === 200 || response.status === 201) {
            return response.data.data;
        } else {
            throw new Error("oops");
        }
    } catch (error) {
        throw error;
    }
};


export const CHANGE_USER_PASSWORD = async (info: ChangePasswordInput, token: string) => {
    try {
        const response: ApiResponse<UserRes> = await Axios({
            method: "POST",
            url: `/auth/change-password`,
            data: info,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (response.status === 200 || response.status === 201) {
            return response.data.data;
        } else {
            throw new Error("oops");
        }
    } catch (error) {
        throw error;
    }
};