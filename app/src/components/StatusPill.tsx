export function StatusPill({ status }: { status: string }) {
  const map: Record<string, string> = {
    paid: 'bg-pulse-50 dark:bg-pulse-900/30 text-pulse-800 dark:text-pulse-200',
    refunded: 'bg-danger-bg text-danger',
    pending: 'bg-warning-bg text-warning',
    failed: 'bg-danger-bg text-danger',
  };
  const dot: Record<string, string> = {
    paid: 'bg-pulse-600',
    refunded: 'bg-danger',
    pending: 'bg-warning',
    failed: 'bg-danger',
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs ${map[status] ?? ''}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dot[status] ?? ''}`} />
      {status}
    </span>
  );
}
