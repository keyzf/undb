import { ActionIcon, IconDots, Menu } from '@egodb/ui'

interface IProps {
  children?: React.ReactNode
}

export const KanbanLaneMenu: React.FC<IProps> = ({ children }) => {
  return (
    <Menu width={200}>
      <Menu.Target>
        <ActionIcon>
          <IconDots size={14} />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>{children}</Menu.Dropdown>
    </Menu>
  )
}
