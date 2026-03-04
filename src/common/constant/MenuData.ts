export const SidebarMenuItems = [
    {label: 'Learn', path: '/learn'},
    {label: 'Repeat', path: '/repeat'},
    {label: 'Stats', path: '/stats'}

]


export const LANG_CONFIG = {
    kk: {key: 'karakalpak', label: 'Karakalpak', flipLabel: 'Korean', flipKey: 'korean'},
    kor: {key: 'korean', label: 'Korean', flipLabel: 'Karakalpak', flipKey: 'karakalpak'}
} as const;


export const LEVEL_KEY_MAP = {
    'Beginner': 'begLevel',
    'Intermediate':  'midLevel',
    'Advanced': 'advLevel'
} as const;