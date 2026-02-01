# Aura Flora | Database Schema Manifest

This document outlines the core entities for the "Digital Atelier" e-commerce system. The naming conventions follow the brand's architectural and archival tone.

---

## 1. Product
*The core botanical item.*

| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | `UUID` | system identifier
| `ref` | `String` | Unique slug or system ID (e.g., `obsidian-tulip`). |
| `name` | `String` | Botanical name for display. |
| `price` | `Number` | Technical unit cost. |
| `category` | `String` | Classification (e.g., `architectural`, `stellar`). | basically enum (plants , flowers , pottery , candles, seeds)
| `images` | `String` | URL for the vertical pillar layout. |
| `origin` | `String` | Sourcing node (e.g., `Netherlands`). |
| `description`| `Text` | Minimalist specimen narrative. |
| `stock` | `Number` | 

---

## 2. User
*The identity and logistics node.*

| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | `UUID` | Unique system identifier. |
| `name` | `String` | Full name of the collector. |
| `email` | `String` | Primary contact and login. |
| `phone` | `String` | contact info
| `addresses` | `Array` | List of shipping addresses (Strings). |
| `history` | `Array` | Array of `Acquisition.id` for the "Acquisition Archive." |

---

## 3. Order
*The transaction and certificate of ownership.*

| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | `UUID` | Unique certificate identifier. |
| `collector_id`| `UUID` | Reference to the purchasing Collector. |
| `items` | `JSON` | List of items: `[{ specimen_id, qty, price_at_purchase }]`. |
| `total` | `Number` | Final transaction value. |
| `status` | `String` | Current state: `logged`, `dispatched`, `archived`. |
| `timestamp` | `Date` | Date of acquisition. |

---

## Relationships

- **User to Addresses:** 1 to Many (A collector has multiple shipping nodes).
- **User to Orders** 1 to Many (A collector builds an archive over time).
- **Order to Products:** Many to Many (One acquisition contains multiple specimens).