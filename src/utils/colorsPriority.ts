export type PriorityColor = 'red' | 'orange' | 'yellow' | 'green';

const priorityColors: Record<PriorityColor, string> = {
  red: 'bg-[#f7a59a] text-[#5a2e0c] border-2 border-[#5a2e0c]',
  orange: 'bg-[#f3b16a] text-[#5a2e0c] border-2 border-[#5a2e0c]',
  yellow: 'bg-[#f7d878] text-[#5a2e0c] border-2 border-[#5a2e0c]',
  green: 'bg-[#6fcf97] text-[#1f4723] border-2 border-[#1f4723]',
};

const buttonStyles: Record<PriorityColor, string> = {
  red: 'bg-[#5a2e0c] text-[#f7a59a] border-2 border-[#f7a59a] hover:bg-[#f7a59a] hover:text-[#5a2e0c] hover:border-[#5a2e0c]',
  orange: 'bg-[#5a2e0c] text-[#f3b16a] border-2 border-[#f3b16a] hover:bg-[#f3b16a] hover:text-[#5a2e0c] hover:border-[#5a2e0c]',
  yellow: 'bg-[#5a2c0c] text-[#f7d878] border-2 border-[#f7d878] hover:bg-[#f7d878] hover:text-[#5a2e0c] hover:border-[#5a2e0c]',
  green: 'bg-[#1f4723] text-[#6fcf97] border-2 border-[#6fcf97] hover:bg-[#6fcf97] hover:text-[#1f4723] hover:border-[#1f4723]',
};

export function getPriorityClasses(priorityColor: PriorityColor) {
  return priorityColors[priorityColor] ?? '';
}

export function getButtonPriorityClasses(priorityColor: PriorityColor) {
  return buttonStyles[priorityColor] ?? '';
}
