import {z} from 'zod';

export const registerSchema = z.object({
    NombreUsuario: z.string({
        required_error: "Username is required",
    }),

    CorreoElectronico: z
        .string({
        required_error: "Email is required",
    })
    .email({
        message: "Invalid email",
    }),

    password: z
        .string({
            required_error: "Password is required"
        })
        .min(6, {
            message: "Password must be at least 6 charecters"
        })
});

export const loginSchema = z.object({
    NombreUsuario: z
    .string({
    required_error: "Username is required",
    }),
    
    Contrasena: z
    .string({
        required_error: "Password is required"
    })
    .min(6, {
        message: "Password must be at least 6 charecters"
    })
})

