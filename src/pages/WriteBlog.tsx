
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { motion } from 'framer-motion'

export default function WriteBlog(){
 const [md,setMd]=useState('# Hello World')
 return (
  <motion.div initial={{opacity:0}} animate={{opacity:1}} className="p-6 grid md:grid-cols-2 gap-6">
    <textarea className="border p-4" value={md} onChange={e=>setMd(e.target.value)} />
    <div className="prose border p-4"><ReactMarkdown>{md}</ReactMarkdown></div>
  </motion.div>
 )
}
