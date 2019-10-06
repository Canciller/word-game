import { withGameContext } from 'context/GameContext';
import { withPlayerContext } from 'context/PlayerContext';
import { withLobbyContext } from 'context/LobbyContext';

const withCompleteContext  = Component => withGameContext(withPlayerContext(withLobbyContext(Component)));

export default withCompleteContext;
