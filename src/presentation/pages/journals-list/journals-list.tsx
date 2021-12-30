import React, { useState } from 'react'
import { Box, Flex } from "@chakra-ui/react"
import { ButtonAdd, LogoSVG } from 'presentation/components'
import { NoJournals } from './no-journals'
import { List } from './list'
import { Journal } from 'domain/models/journal'
import { PageRoutes } from 'main/constants/page-routes'

const JournalsList: React.FC = () => {
  const [journals] = useState<Journal[]>([
    {
      id: '1',
      title: 'HTML_',
      type: 'public',
      entryIds: ['1', '2'],
      userId: 'user1',
      createdAt: new Date().toLocaleDateString(),
      updatedAt: new Date().toLocaleDateString(),
    }
  ])
  return (
    <Box p="3.2rem 2.8rem 3.209rem 2.8rem" h="100%">
      <Flex justifyContent="space-between" alignItems="center">
        <LogoSVG />
        {journals[0] && <ButtonAdd to={PageRoutes.CreateJournal}>Add Journal</ButtonAdd>}
      </Flex>
      {journals[0] ? (<List  journals={journals} />) : <NoJournals />}
    </Box>
  )
}

export default JournalsList