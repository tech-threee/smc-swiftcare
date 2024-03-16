import { ApiResponse, UserRoles } from "@/types";
import Axios from "../axios";

type MessageInput = {
    title: string
    message: string
}

type StaffGroupMessageInput = MessageInput & {
    role: UserRoles
}

type IndividualMessageInput = MessageInput & {
    email: string
}

export const SEND_TO_ALL_USERS = async (info: LoginUserInput) => {
    try {
        const response: ApiResponse<null> = await Axios({
            method: "POST",
            url: `/communication/`,
            data: info
        });

        if (response.data.success) {
            return [];
        } else {
            throw new Error("oops");
        }
    } catch (error) {
        throw error;
    }
};

export const SEND_TO_ALL_STAFF = async (info: LoginUserInput) => {
    try {
        const response: ApiResponse<null> = await Axios({
            method: "POST",
            url: `/communication/staff`,
            data: info
        });

        if (response.data.success) {
            return [];
        } else {
            throw new Error("oops");
        }
    } catch (error) {
        throw error;
    }
};

export const SEND_TO_ALL_PATIENTS = async (info: LoginUserInput) => {
    try {
        const response: ApiResponse<null> = await Axios({
            method: "POST",
            url: `/communication/patients`,
            data: info
        });

        if (response.data.success) {
            return [];
        } else {
            throw new Error("oops");
        }
    } catch (error) {
        throw error;
    }
};

export const SEND_TO_INDIVIDUAL = async (info: LoginUserInput) => {
    try {
        const response: ApiResponse<null> = await Axios({
            method: "POST",
            url: `/communication/individual`,
            data: info
        });

        if (response.data.success) {
            return [];
        } else {
            throw new Error("oops");
        }
    } catch (error) {
        throw error;
    }
};

export const SEND_TO_STAFF_GROUP = async (info: LoginUserInput) => {
    try {
        const response: ApiResponse<null> = await Axios({
            method: "POST",
            url: `/communication/staff?type=${info}`,
            data: info
        });

        if (response.data.success) {
            return [];
        } else {
            throw new Error("oops");
        }
    } catch (error) {
        throw error;
    }
};