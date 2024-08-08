'use server'

import prisma from "@/lib/prisma";
import getSession from "@/lib/getSession";
import { revalidatePath } from "next/cache";

export default async function updateProfile (formData: FormData) {

    const session = await getSession();
    const user = session?.user;

    if (!user) {
        throw new Error("User not found");
    }

    const data = {
        user: user,
        userId: user.id,
        firstName: formData.get("firstName") as string,
        lastName: formData.get("lastName") as string,
        phone: formData.get("phone") as string,
        houseNumber: formData.get("houseNumber") as string,
        streetName: formData.get("streetName") as string,
        town: formData.get("town") as string,
        postCode: formData.get("postCode") as string,
    };
    
try {
    const existingProfile = await prisma.profile.findUnique({
        where: {
            userId: user.id,
        },
    });
    let response;
    if (existingProfile) {
        const updateData: any = {
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
            houseNumber: data.houseNumber,
            streetName: data.streetName,
            town: data.town,
            postCode: data.postCode,
        };
    
        if (data.userId) {
            updateData.userId = data.userId;
        }
    
        response = await prisma.profile.update({
            where: {
                userId: user.id,
            },
            data: {
                ...updateData,
            },
        });
    } else {
        const createData: any = {
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
            houseNumber: data.houseNumber,
            streetName: data.streetName,
            town: data.town,
            postCode: data.postCode,
        };
    
        if (data.userId) {
            createData.userId = data.userId;
        }
    
        response = await prisma.profile.create({
            data: {
                ...createData,
                user: {
                    connect: { id: user.id },
                },
            },
        });
    revalidatePath("/profile/settings");
}
} catch (error) {
    console.log(error);
}
}
