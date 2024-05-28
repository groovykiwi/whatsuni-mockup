// Next Imports
import { notFound } from "next/navigation";
import Post from "@/app/components/Post";
import MobilePostInput from "../components/MobilePostInput";
export const metadata = {
  title: "Home",
};

const Home = async () => {

  return (
    <>
      {/* Mobile Post Prompt */}
      <MobilePostInput />
      <Post
        username="naturelover"
        pfp="https://thispersondoesnotexist.com/"
        time="2h"
        text="Being surrounded by the serene beauty of nature always brings a sense of peace and clarity. The gentle rustle of leaves, the soothing chirping of birds, and the crisp freshness of the air create a sanctuary for the soul. In these moments, worries fade away, replaced by a deep appreciation for the wonders of the natural world. 🌿"
        image="https://images.unsplash.com/photo-1669980806206-7dd8839fdddc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        likes="234"
        comments="18"
        hashtags={["nature", "peace"]}
      />

      <Post
        username="travelbug"
        time="1d"
        text="The urge to explore new horizons and experience different cultures is a never-ending adventure. From bustling city streets to serene countryside vistas, every destination offers a unique tapestry of sights, sounds, and flavors waiting to be discovered. Let's embark on this journey together! ✈️"
        likes="456"
        comments="32"
        hashtags={["travel", "explore"]}
      />

      <Post
        username="musicjunkie"
        pfp="https://thispersondoesnotexist.com/"
        time="3d"
        text="Music has the power to transport us to another realm, where emotions flow freely and memories come alive. Whether it's the soulful melody of a jazz tune or the energetic beat of a rock anthem, each note resonates with our deepest feelings, reminding us of the beauty of being alive. Let's get lost in the rhythm! 🎵"
        image="https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        likes="678"
        comments="54"
        hashtags={["music", "soulful"]}
      />

      <Post
        username="foodiegram"
        time="5h"
        text="Food is not just sustenance; it's an expression of culture, creativity, and love. Each dish tells a story, weaving together flavors, textures, and aromas to create a symphony for the senses. So let's indulge in the culinary delights that bring us together and nourish our souls. Bon appétit! 🍽️"
        likes="321"
        comments="28"
        hashtags={["foodie", "yum"]}
      />

      <Post
        username="fitnessfanatic"
        pfp="https://thispersondoesnotexist.com/"
        time="1d"
        text="In the journey of fitness, every drop of sweat is a testament to our dedication and determination. It's about pushing beyond our limits, embracing challenges, and celebrating progress, no matter how small. Together, let's sculpt our bodies and strengthen our minds. 💪"
        image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        likes="543"
        comments="43"
        hashtags={["fitness", "health"]}
      />

      <Post
        username="bookworm"
        time="4h"
        text="Books are portals to infinite worlds, where imagination knows no bounds and dreams take flight. Within their pages, we find solace, wisdom, and the freedom to explore beyond the confines of reality. Let's lose ourselves in the enchanting realms of literature and embark on unforgettable adventures. 📖"
        likes="432"
        comments="39"
        hashtags={["books", "reading"]}
      />

      <Post
        username="artlover"
        pfp="https://thispersondoesnotexist.com/"
        time="3d"
        text="Art is the language of the soul, speaking volumes where words fail. With every brushstroke and canvas stroke, artists breathe life into their visions, igniting our imagination and stirring our emotions. Let's embrace the beauty that surrounds us and find inspiration in every hue and shade. 🎨"
        image="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1945&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        likes="765"
        comments="67"
        hashtags={["art", "inspiration"]}
      />

      <Post
        username="motivator"
        time="6h"
        text="In the journey of life, belief in oneself is the cornerstone of success. It's the unwavering confidence that propels us forward, even in the face of adversity. So let's harness our inner strength, embrace our uniqueness, and unleash our full potential upon the world. 💫"
        likes="876"
        comments="76"
        hashtags={["motivation", "inspire"]}
      />

      <Post
        username="fashionista"
        pfp="https://thispersondoesnotexist.com/"
        time="2d"
        text="Fashion isn't just about what we wear; it's a reflection of who we are. It's about expressing our individuality, creativity, and confidence to the world. So let's set trends, break boundaries, and strut our stuff with pride. 💃"
        image="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        likes="654"
        comments="52"
        hashtags={["fashion", "trendsetter"]}
      />

      <Post
        username="photographer"
        time="1d"
        text="Photography is more than just capturing images; it's about freezing moments in time and preserving memories that last a lifetime. Through the lens, we witness the beauty of the world, from breathtaking landscapes to intimate portraits. Let's continue to frame the world around us and create snapshots of happiness. 📷"
        likes="987"
        comments="89"
        hashtags={["photography", "memories"]}
      />
    </>
  );
};

export default Home;
