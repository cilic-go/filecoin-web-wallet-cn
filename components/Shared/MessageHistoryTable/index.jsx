import React from 'react'
import PropTypes from 'prop-types'

import Box from '../Box'
import Glyph from '../Glyph'
import { Text, Title, BigTitle } from '../Typography'
import Button from '../Button'

import { ADDRESS_PROPTYPE, MESSAGE_PROPS } from '../../../customPropTypes'
import MessageHistoryRow from './MessageHistoryRow'
import EmptyHistory from './EmptyHistory'
import LoadingScreen from '../LoadingScreen'
import ShowMore from './ShowMore'

const MessageHistoryTable = ({
  address,
  messages,
  selectMessage,
  loading,
  paginating,
  showMore,
  refresh,
  total
}) => {
  return (
    <Box maxWidth={16} width='100%' border='1px' mt={6} pl={6} pr={6} >
      <Box display='flex' alignItems='center' justifyContent='space-between' mb={4}>
        <Box display='flex' alignItems='center' justifyContent='flex-start' iv>
          {/* <Glyph mr={3} color='core.primary' acronym='Tx' /> */}
          <Title color='core.primary'>交易的历史记录</Title>
        </Box>
        <Button variant='secondary' onClick={refresh} title='刷新' />
      </Box>
      {loading ? (
        <LoadingScreen />
      ) : (
          <>
            {messages.length > 0 ? (
              <>
                {messages.map(msg => (
                  <MessageHistoryRow
                    address={address}
                    key={msg.cid}
                    message={msg}
                    selectMessage={selectMessage}
                  />
                ))}
                <ShowMore
                  paginating={paginating}
                  showMore={showMore}
                  confirmed={messages.filter(
                    ({ status }) => status === 'confirmed'
                  )}
                  total={total}
                />
              </>
            ) : (
                <EmptyHistory />
              )}
          </>
        )}
    </Box>
  )
}

MessageHistoryTable.propTypes = {
  /**
   * The FIL address this message history relates to
   */
  address: ADDRESS_PROPTYPE,
  /**
   * An array of message types
   */
  messages: PropTypes.arrayOf(MESSAGE_PROPS),
  selectMessage: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  paginating: PropTypes.bool.isRequired,
  showMore: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  refresh: PropTypes.func.isRequired
}

MessageHistoryTable.defaultProps = {
  messages: [],
  loading: false
}

export default MessageHistoryTable
