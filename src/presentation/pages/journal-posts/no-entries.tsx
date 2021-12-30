import React from 'react'
import { Flex, Text } from "@chakra-ui/react"
import { EmptySVG, LinkText } from 'presentation/components'

const NoEntries: React.FC = () => {
  const createRoute = `journals/posts/1/create`
  return (
    <Flex flexDir="column" alignItems="center">
      <Text m="12.4rem 0 6.694rem 0" fontSize="2.4rem"fontWeight="bold" color="#000000">HTML</Text>
      <EmptySVG />
      <LinkText to={createRoute} mt="13rem">Create a note</LinkText>
    </Flex>
  )
}

export default NoEntries