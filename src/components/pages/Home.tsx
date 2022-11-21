import {
  Stack,
  Accordion,
  Container
} from "@chakra-ui/react";
import { Panels } from "../molecules/Panels";

export const Home = () => {
  return (
    <>
      <Container maxW="container.lg">
        <Stack spacing={3}>

          <Accordion defaultIndex={[0]} allowMultiple overflowX="unset" overflowY="unset">
            <Panels data={{
              url: 'https://res.cloudinary.com/danj8nvfr/image/upload/v1668927341/watch/dead-end-g918d5f4f4_640.webp',
              alt: 'movie',
              head: 'サイトの説明',
              texts: ['この掲示板は、ウォッチパーティーの募集と簡易的なチャット機能があります。', 'また、会員登録して頂くと募集機能が使える様になります。']
            }}
            />


            <Panels data={{
              url: 'https://res.cloudinary.com/danj8nvfr/image/upload/v1668935975/watch/yarn-phone-g5c047b45e_640.webp',
              alt: 'app',
              head: '外部のサービスや募集だけでも大歓迎',
              texts: ["また皆で見る機能については、外部のサービス", <a href='https://www.twitch.tv/'>twitch</a>, "などの利用も大歓迎です！",
                'twitchなどで配信している方も募集板代わりに使って頂ければありがたいです。']
            }}
            />

            <Panels data={{
              url: 'https://res.cloudinary.com/danj8nvfr/image/upload/v1668935850/watch/announcer-g27ef34664_640.webp',
              alt: 'etc',
              head: 'ご意見ください！',
              texts: ["また、現在はPCや一部タブレットなどを対象に作成していますが、", "スマホでもウォチパ出来るようになどアイデアなどや不満があれば対応していきたいので、どんどん意見お願いします。",
                "意見などについては", <a href=''>コチラ</a>, "までお願いします。",
                'それでは動画をお楽しみください。',
                "This is " + <strong>not</strong> + "working."]
            }}
            />

          </Accordion>
        </Stack>
      </Container>
    </>
  );
};
