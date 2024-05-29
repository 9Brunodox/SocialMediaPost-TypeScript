import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'

import './global.css';

const posts = [
  {
      id: 1,
      author: {
          avatarUrl: "https://github.com/9Brunodox.png",
          name: 'Bruno Moreira',
          role: 'Web Developer'
      },
      content: [
          {type: 'paragraph', content: 'Fala galeraa 👋'},
          {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
          {type: 'link', content: '👉 bruno.dev/doctorcare'}, 
      ],
      publishedAt: new Date('2024-05-03'),
  },
  {
      id: 2,
      author: {
          avatarUrl: "https://yt3.googleusercontent.com/-H4bsnS3lUHCiaDtVcHxm9dJudoCyLdjnBCaIJZSsMJPNqIJFZFqs5iaTx0OjZcxwwCxycfEnA=s900-c-k-c0x00ffffff-no-rj",
          name: 'Kirito',
          role: 'Profissional Player'
      },
      content: [
          {type: 'paragraph', content: 'Eai!'},
          {type: 'paragraph', content: 'Acabei de zerar o Aincrad e matar o Heathcliff'},
          {type: 'link', content: '👉 aincrad.com.br'}, 
      ],
      publishedAt: new Date('2022-09-08'),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post
              key={post.id} 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App