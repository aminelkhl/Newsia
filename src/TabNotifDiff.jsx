import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import CommentIcon from '@material-ui/icons/Comment';
import React from 'react'
import NotificationLike from './NotificationLike.jsx';
import NotificationFollow from './NoificationFollow.jsx';
import NotificationComment from './NotificationComment.jsx'
import { Label, Menu, Tab } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'

const panes = [
  {
    menuItem: { key: 'like', icon: 'like', content: 'J aime' },
    render: () => <Tab.Pane>
      <NotificationLike />
      <NotificationLike />
      <NotificationLike />
      <NotificationLike />
      <NotificationLike />
      <NotificationLike />
      <NotificationLike />
      <NotificationLike />
    </Tab.Pane>,
  },
  {
    menuItem: { key: 'follow', icon: 'user', content: 'Abonnement' },
    render: () => <Tab.Pane>
      <NotificationFollow />
      <NotificationFollow />
      <NotificationFollow />
      <NotificationFollow />
      <NotificationFollow />
      <NotificationFollow />
      <NotificationFollow />
    </Tab.Pane>,
  },
  {
    menuItem: { key: 'comment', icon: 'comment', content: 'Commentaire' },
    render: () => <Tab.Pane>
      <NotificationComment />
      <NotificationComment />
      <NotificationComment />
      <NotificationComment />
      <NotificationComment />
      <NotificationComment />
      <NotificationComment />
      <NotificationComment />
    </Tab.Pane>,
  },
]

const TabNotifDiff = () => <Tab panes={panes} />

export default TabNotifDiff
