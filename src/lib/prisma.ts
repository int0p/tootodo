// 모든 배포 환경에서 프리즈마가 동작하도록함.
//https://www.youtube.com/watch?v=OUzaUJ3gEug&t=22049s 6:33:00
import Prisma, * as PrismaAll from '@prisma/client';
const PrismaClient = Prisma?.PrismaClient || PrismaAll?.PrismaClient;

export default PrismaClient;