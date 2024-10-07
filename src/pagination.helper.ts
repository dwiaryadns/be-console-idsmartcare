import { Repository, FindManyOptions } from 'typeorm';

export async function paginate<Entity>(
  repository: Repository<Entity>,
  page: number = 1,
  limit: number = 10,
  options: FindManyOptions<Entity> = {}, // Menambahkan opsi tambahan
) {
  const [result, total] = await repository.findAndCount({
    skip: (page - 1) * limit,
    take: limit,
    ...options, // Menggabungkan opsi tambahan seperti relations, where, dsb.
  });

  return {
    data: result,
    totalItems: total,
    currentPage: page,
    totalPages: Math.ceil(total / limit),
  };
}
