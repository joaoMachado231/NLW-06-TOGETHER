import { classToPlain } from 'class-transformer';
import { getCustomRepository } from 'typeorm';
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories';

class ListUserSendComplimentsService {
  async execute(user_id: string) {
    const complimentRepositories = getCustomRepository(ComplimentsRepositories);

    const compliments = await complimentRepositories.find({
      where: {
        user_sender: user_id,
      },
      relations: ['userSender', 'userReceiver', 'tag'],
    });

    return classToPlain(compliments);
  }
}

export { ListUserSendComplimentsService };
