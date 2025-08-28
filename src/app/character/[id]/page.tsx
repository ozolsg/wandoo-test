import { Person } from '@/types/graphql';
import { getClient } from '@/lib/apollo/client';
import { GET_CHARACTER } from '@/lib/apollo/queries';
import { notFound } from 'next/navigation';
import { Character } from '@/components';

interface CharacterPageProps {
  params: Promise<{ id: string }>;
}

export default async function CharacterPage({ params }: CharacterPageProps) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);

  try {
    const { data } = await getClient().query<Person>({
      query: GET_CHARACTER,
      variables: { id: decodedId },
    });

    if (!data) {
      notFound();
    }

    return <Character character={data.person} />;
  } catch (error) {
    console.error('Error fetching character:', error);
    notFound();
  }
}
