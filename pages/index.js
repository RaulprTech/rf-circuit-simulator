import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import React, { useState, useRef } from 'react'
import Circuit from '../components/InputTools/Diagram'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
        <Circuit/>
    </Layout>
  )
}
