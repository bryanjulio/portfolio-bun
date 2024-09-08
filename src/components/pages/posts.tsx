import React, { useEffect, useState } from 'react';

interface Post {
  id: number;
  type: string;
  repo: {
    name: string;
  };
  created_at: string;
}

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubEvents = async () => {
      try {
        const username = 'bryanjulio'; // Substitua pelo seu nome de usuário do GitHub
        const token = ''; // Opcional, se você estiver usando um token de acesso pessoal

        const response = await fetch(`https://api.github.com/users/${username}/events`, {
          headers: {
            Authorization: token ? `token ${token}` : '',
          },
        });

        if (!response.ok) {
          throw new Error('Erro ao buscar dados do GitHub');
        }

        const data = await response.json();
        setPosts(data);
      } catch (error: any) {
        setError('Erro ao buscar dados do GitHub');
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubEvents();
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Ações Recentes no GitHub</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {post.type} em {post.repo.name} ({new Date(post.created_at).toLocaleString()})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
