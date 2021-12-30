import React, { useState } from 'react'
import { Box, Flex } from "@chakra-ui/react"
import { LogoSVG, ButtonAdd } from 'presentation/components'
import NoEntries from './no-entries'
import { EntriesList } from './entries-list'
import { Entry } from 'domain/models/entry'

const JournalPosts: React.FC = () => {
  const [entries] = useState<Entry[]>([
    {
      id: '1',
      title: 'The article element',
      content: 'This element is used to create articles and it comes with some cool browser default styling',
      journalId: 'journal1'
    },
    {
      id: '1',
      title: 'The article element',
      content: 'This element is used to create articles and it comes with some cool browser default styling',
      journalId: 'journal1'
    },
  ])
  const addEntryRoute = `/journals/posts/1/create`
  return (
    <Box p="3.2rem 2.8rem 3.209rem 2.8rem" h="100%">
      <Flex justifyContent="space-between" alignItems="center">
        <LogoSVG />
        {entries[0] && <ButtonAdd to={addEntryRoute}>Add Note</ButtonAdd>}
      </Flex>
      {entries[0] ? <EntriesList entries={entries} /> : <NoEntries />}
    </Box>
  )
}

export default JournalPosts