import Post from "@/app/components/Post";
import ProfileCard from "@/app/components/ProfileCard";

export async function generateMetadata({ params }) {
  return {
    title: params.username,
  };
}

function ProfilePage() {
  return (
    <>
      <ProfileCard
        username="Name"
        email="21834028@mit.edu"
        pfp="https://thispersondoesnotexist.com/"
        bio="I love WhatsUni!! 🥰"
        followers="352"
        followings="647"
        ownership={true}
      />
      <Post
        username="Name"
        pfp="https://thispersondoesnotexist.com/"
        time="1m"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quibusdam magni quidem itaque totam reprehenderit, quae porro consequuntur quo voluptas, nulla error ex officiis possimus temporibus, est repellat sit voluptates?"
        likes="256"
        comments="12"
      />

      <Post
        username="Name"
        time="3h"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quibusdam magni quidem itaque totam reprehenderit, quae porro consequuntur quo voluptas, nulla error ex officiis possimus temporibus, est repellat sit voluptates?"
        image="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        likes="31"
        comments="45"
        hashtags={["uni", "study"]}
      />
      <Post
        username="Name"
        pfp="https://thispersondoesnotexist.com/"
        time="2d"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        image="https://images.unsplash.com/photo-1712194295920-a7e01399bf9f?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        likes="453"
        comments="42"
        hashtags={["galaxy", "space"]}
      />
    </>
  );
}

export default ProfilePage;
