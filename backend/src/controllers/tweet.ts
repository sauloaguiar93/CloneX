import { addTweetSchema } from "../schemas/add-tweet";
import { addHashtag } from "../services/trends";
import { checkIfTweetIsLikedByUser, createTweet, findAnswersFromTweet, findTweet, likeTweet, unlikeTweet } from "../services/tweet";
import { ExtendedRequest } from "../types/extended-request";

export const addTweet = async (req: ExtendedRequest, res: Response) => {
    // Validar dados enviados
    const safeData = addTweetSchema.safeParse(req.body);
    
    if(!safeData.success) {
        return res.json({ error: safeData.error.flatten().fieldErrors });
    }

    // Verificar se é uma resposta
    if(safeData.data.answer){
        const hasAnswerTweet = await findTweet(parseInt(safeData.data.answer));
        if(!hasAnswerTweet) {
            return res.json({ error: 'O Tweet original não existe.' });
        }
    }

    // Criar o tweet
    const newTweet = await createTweet(
        req.userSlug as string,
        safeData.data.body,
        safeData.data.answer ? parseInt(safeData.data.answer) : 0
    );

    // Adicionar a hashtag ao trend
    const hashtags = safeData.data.body.match(/#[a-zA-Z0-9_]+/g);
    
    if(hashtags) {
        for(let hashtag of hashtags) {
            if(hashtag.length >= 2) {
                await addHashtag(hashtag);
            }
        }
    }

    res.json({ tweet: newTweet });
}

export const getTweet = async (req: ExtendedRequest, res: Response) => {
    const { id } = req.params;

    const tweet = await findTweet(parseInt(id));
    if(!tweet) return res.json({ error: 'Tweet não existe!'});
    res.json({ tweet });
}

export const getAnswer = async (req: ExtendedRequest, res: Response) => {
    const { id } = req.params;

    const answers = await findAnswersFromTweet(parseInt(id));

    res.json({ answers });
}

export const likeToggle = async (req: ExtendedRequest, res: Response) => {
    const { id } = req.params;

    const liked = await checkIfTweetIsLikedByUser(
        req.userSlug as string,
        parseInt(id)
    );
    if(liked) {
        unlikeTweet(req.userSlug as string, parseInt(id));
    } else {
        likeTweet(req.userSlug as string, parseInt(id));
    }
    res.json({});
}

