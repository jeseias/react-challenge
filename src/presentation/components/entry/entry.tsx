import React from 'react'
import { Box, Text } from "@chakra-ui/react"
import { Entry as EntryProps } from 'domain/models/entry'

const Entry: React.FC<EntryProps> = ({ title }) => {
  return (
    <Box 
      bg="light.400" 
      minHeight="17.8rem"
      boxShadow="-5px 5px 20px rgba(0, 0, 0, 0.12)" 
      borderRadius=".4rem" 
      p="1.2rem 1rem"
    >
      <Text fontSize="2rem" fontWeight="normal" color="dark">{title}</Text>
    </Box>
  )
}

export default Entry
