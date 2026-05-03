# Merchant Dashboard — UI Kit

The dense, day-job admin surface for Pulse merchants. This kit covers:

- Topbar + sidebar navigation shell
- Home / overview with KPI cards + activity
- Orders list (data table)
- Order detail (split layout)
- Inventory list

## Components

| File                  | Description                                              |
| --------------------- | -------------------------------------------------------- |
| `Shell.jsx`           | App frame: sidebar + topbar + content slot               |
| `KPICard.jsx`         | Metric card with delta                                   |
| `DataTable.jsx`       | Reusable hairline data table                             |
| `Badge.jsx`           | Status pill                                              |
| `Button.jsx`          | Primary / secondary / ghost / danger                     |
| `OrdersScreen.jsx`    | Orders list view                                         |
| `OrderDetail.jsx`     | Order detail split view                                  |
| `HomeScreen.jsx`      | Overview / dashboard home                                |
| `InventoryScreen.jsx` | Inventory list                                           |

Open `index.html` for the click-thru prototype — the sidebar navigates between screens; the orders table is clickable (opens detail view).
