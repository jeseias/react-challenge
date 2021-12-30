import React, { useState } from 'react'
import { Box, Flex } from "@chakra-ui/react"
import { ButtonAdd, LogoSVG } from 'presentation/components'
import { NoJournals } from './no-journals'
import { List } from './list'
import { Journal } from 'domain/models/journal'

const JournalsList: React.FC = () => {
  const [journals] = useState<Journal[]>([])
  return (
    <Box p="3.2rem 2.8rem 3.209rem 2.8rem" h="100%">
      <Flex justifyContent="space-between" alignItems="center">
        <LogoSVG />
        {journals[0] && <ButtonAdd>Add Journal</ButtonAdd>}
      </Flex>
      {journals[0] ? (<List  journals={journals} />) : <NoJournals />}
    </Box>
  )
}

export default JournalsList