import { z } from "zod";

export const signinSchema = z.object({
    email: z.string({ message: 'E-mail é obrigatório!' }).email('Digite um e-mail válido!'),
    password: z.string({ message: 'Senha é obrigatória!' }).min(4, 'A senha precisa ser maior que 4 caracteres.')
});