import React from 'react'
import Head from 'next/head'
import { Welcome, Logo } from './index.styled'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Welcome>
        <Logo>
          <img src='/visie.svg' />
        </Logo>
        <p>A boilerplate of project with NextJS</p>
      </Welcome>
    </div>
  )
}
