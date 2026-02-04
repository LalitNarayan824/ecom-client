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
| `addresses` | `Array` | List of shipping addresses (Address). |
| `history` | `Array` | Array of `Acquisition.id` for the "Acquisition Archive." |
| `isProfileComplete` | `Boolean` | flag for profile completion  |



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

## 4. Address
*The identity and logistics node.*

| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | `UUID` | Unique system identifier. |
| `userId` | `UUID` | Unique system identifier of the user. |
| `title` | `String` | Full name of the collector. |
| `address` | `String` | Primary contact and login. |
| `message` | `String` | contact info
| `isDefault` | `Boolean` | flag for primary/default address |


## Relationships

- **User to Addresses:** 1 to Many (A collector has multiple shipping nodes).
- **User to Orders** 1 to Many (A collector builds an archive over time).
- **Order to Products:** Many to Many (One acquisition contains multiple specimens).




--------------------------------------------------NEW ONE-----------------------------------------------------


# Aura Flora | Database Schema Manifest (System Registry)

This document outlines the core entities for the "Digital Atelier" e-commerce system. The naming conventions follow the brand's architectural and archival tone, optimizing for Next.js 15 and high-performance querying.

---

## 1. Product
*The central registry for all botanical and artisanal items.*

| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | `UUID` | Primary system identifier. |
| `ref` | `String` | Unique slug/registry key (e.g., `obsidian-tulip`). |
| `name` | `String` | Display name (e.g., "Obsidian Tulip"). |
| `latin_name` | `String` | Scientific classification (e.g., *Tulipa nightshade*). |
| `price` | `Decimal` | Technical unit cost (use Decimal for precision). |
| `stock_count` | `Integer` | Units currently held in the inventory node. |
| `category` | `Enum` | `plants`, `flowers`, `pottery`, `candles`, `seeds`. |
| `origin_node` | `String` | Sourcing location (e.g., "Netherlands Archive"). |
| `description` | `Text` | Minimalist specimen narrative. |
| `media_gallery`| `JSON` | Array of URLs for vertical pillar layouts. |
| `metadata` | `JSON` | Technical specs: `{ height, spread, rarity_index }`. |

---

## 2. User
*The identity and logistics profile for the user.*

| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | `UUID` | Unique collector identifier. |
| `full_name` | `String` | Legal name of the specimen holder. |
| `email` | `String` | Unique contact and login (Indexed). |
| `phone` | `String` | Secondary contact string. |
| `is_verified` | `Boolean` | Flag for profile completion/verification status. |
| `created_at` | `Timestamp` | System entry date. |

---

## 3. Address
*Physical endpoints for specimen delivery.*

| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | `UUID` | Unique logistics node identifier. |
| `collector_id`| `UUID` | **FK**: Links to `Node_Collector`. |
| `label` | `String` | e.g., "Primary Lab", "Residential Node". |
| `street_line` | `String` | Physical street address. |
| `city` | `String` | City node name. |
| `postal_code` | `String` | Regional routing code. |
| `country` | `String` | ISO country code. |
| `is_default` | `Boolean` | Priority flag for rapid checkout. |

---

## 4. Order
*The transaction record and source for the Certificate of Authenticity.*

| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | `UUID` | Unique certificate identifier (Certificate Hash). |
| `collector_id`| `UUID` | **FK**: The acquiring Collector. |
| `items_json` | `JSON` | Snapshot: `[{product_id, qty, price_at_purchase}]`. |
| `total_value` | `Decimal` | Final transaction value. |
| `status` | `Enum` | `logged`, `processing`, `dispatched`, `archived`. |
| `shipping_snap`| `JSON` | Immutable snapshot of address at purchase. |
| `tracking_ref` | `String` | Logistics tracking identifier. |
| `timestamp` | `Timestamp` | Exact moment of acquisition. |

---

## Architectural Relationships



* **Collector → Address**: `1:N` (A collector manages multiple logistics nodes).
* **Collector → Acquisition**: `1:N` (A collector builds an acquisition archive).
* **Acquisition → Product**: `M:N` (Managed via `items_json` to preserve historical price/data integrity).