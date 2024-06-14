'use client'

import { useEffect, useState } from "react"

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

recognition.continuous = true
recognition.interimResults = true
recognition.lang = 'en-US'


const useSpeechRecognition = () => {
  const [status, setStatus] = useState('idle')
  const [transcript, setTranscript] = useState("")

  useEffect(() => {
    handleListen()
  
  }, [status])

  const handleListen = () => {
    if (status === 'idle'){
      recognition.stop()
      recognition.onend = () => {
        recognition.stop()
        setTranscript('')
      }
      return;
    }
    if (status === 'recording') {
      recognition.start()
      recognition.onend = () => {
        recognition.start()
      }
    }

    recognition.onresult = event => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
      console.log(transcript)
      setTranscript(transcript)
      recognition.onerror = event => {
        console.log(event.error)
      }
    }
  }

  const startRecording = () => setStatus('recording')
  const stopRecording = () => setStatus('stopped')

  return {
    status,
    setStatus,
    transcript,
    startRecording,
    stopRecording,
    hasRecgonitionSupport: !!recognition
  }
}

export default useSpeechRecognition
