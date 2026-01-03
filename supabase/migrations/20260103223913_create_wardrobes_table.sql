create table public.wardrobes (
  id uuid not null,
  created_at timestamp with time zone not null default now(),
  updated_at timestamp without time zone null,
  price numeric null,
  name text null,
  description character varying null,
  user_id uuid null,
  constraint wardrobes_pkey primary key (id),
  constraint wardrobes_user_id_fkey foreign KEY (user_id) references profiles (id) on update CASCADE on delete CASCADE
) TABLESPACE pg_default;