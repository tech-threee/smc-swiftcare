import { ApiResponse, UserRoles } from "@/types";
import Axios from "../axios";

type MessageInput = {
    title: string
    message: string
}

type IndividualMessageInput = MessageInput & {
    email: string
    role: UserRoles & "PATIENT"

}


export const SEND_TO_ALL_STAFF = async (info: MessageInput) => {
    try {
        const response: ApiResponse<[]> = await Axios({
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

export const SEND_TO_ALL_PATIENTS = async (info: MessageInput) => {
    try {
        const response: ApiResponse<[]> = await Axios({
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

export const SEND_TO_INDIVIDUAL = async (info: IndividualMessageInput) => {
    try {
        const response: ApiResponse<[]> = await Axios({
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

export const SEND_TO_STAFF_GROUP = async (info: MessageInput, role: UserRoles) => {
    try {
        const response: ApiResponse<[]> = await Axios({
            method: "POST",
            url: `/communication/staff?role=${role}`,
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