import React, { useEffect, useState } from 'react'
import { Box, Flex } from "@chakra-ui/react"
import { LogoSVG, ButtonAdd } from 'presentation/components'
import NoEntries from './no-entries'
import { EntriesList } from './entries-list'
import { Entry } from 'domain/models/entry'
import { LoadEntries } from 'domain/usecases/load-entries'
import { useParams } from 'react-router-dom'

type Props = {
  loadEntries: LoadEntries
}

const JournalEntries: React.FC<Props> = ({ loadEntries }: Props) => {
  const [entries, setEntries] = useState<Entry[]>([])
  const { userId, entryId } = useParams()

  const handleLoadEntries = async () => {
    try {
      const result = await loadEntries.load()
      console.log('we have the following', result.entries)
      setEntries(result.entries)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    handleLoadEntries()
  }, [])

  const addEntryRoute = `/journals/${userId}/entries/${entryId}/create`
  return (
    <Box p="3.2rem 2.8rem 3.209rem 2.8rem" h="100%">
      <Flex justifyContent="space-between" alignItems="center">
        <LogoSVG aria-label="company logo"/>
        {entries[0] && <ButtonAdd to={addEntryRoute} state={{ userId, entryId }} role="button">Add Note</ButtonAdd>}
      </Flex>
      {entries[0] ? <EntriesList entries={entries} /> : <NoEntries />}
    </Box>
  )
}

export default JournalEntries