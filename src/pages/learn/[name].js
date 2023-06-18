import { useRouter } from 'next/router';
import topics from '../api/topics';

export default function Learn() {
  const router = useRouter();
  const { name } = router.query;
  const topic = topics.find((topic) => topic.id === name);

  if (!topic) {
    // Handle the case when the topic is not found
    return <h1>Topic not found</h1>;
  }

  return <h1>Learn {topic.id}</h1>;
}
