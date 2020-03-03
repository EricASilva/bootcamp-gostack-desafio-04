import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Eric Silva',
          avatar: 'https://i.pravatar.cc/150?img=52'
        },
        date: '02 Mar 2020',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
            },
            content: 'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)'
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Caio Silva',
          avatar: 'https://i.pravatar.cc/150?img=11'
        },
        date: '25 Fev 2020',
        content: 'E aí galera, beleza?\nEstou fazendo o Bootcamp GoStack da Rocketseat e está sendo bem bacana. Mais alguém nessa pegada?! Comenta na publicação para trocarmos experiências.',
        comments: [
          {
            id: 4,
            author: {
              name: 'Matheus Santos',
              avatar: 'https://i.pravatar.cc/150?img=12'
            },
            content: 'Também estou fazendo e estou adorando. Estou no módulo sobre introdução ao React e estou desenvolvendo o desafio proposto para fixar o que foi aprendido.'
          },
          {
            id: 5,
            author: {
              name: 'Antônio Mattos',
              avatar: 'https://i.pravatar.cc/150?img=13'
            },
            content: 'Eu também e estou achando conteúdo excelente. Estou no módulo sobre Node e construindo minha API para finalizar os desafios.'
          },
          {
            id: 6,
            author: {
              name: 'Katia Sousa',
              avatar: 'https://i.pravatar.cc/150?img=16'
            },
            content: 'Estou pensando em me inscrever na próxima turma e a opinião da galera é sempre positiva. É bom saber e poder acompanhar a evolução da comunidade!.'
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;