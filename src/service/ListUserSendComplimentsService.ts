import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UsersRepositories } from "../repositories/UserRepositories"



class ListUserSendComplimentsService {

    async execute(user_id: string){
        const complimentRepositories = getCustomRepository(ComplimentsRepositories)

        const compliments = await complimentRepositories.find({
            where: {
                user_sender: user_id
            },
        });

        return compliments;
    }
}

export { ListUserSendComplimentsService }