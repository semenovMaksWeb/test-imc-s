export function createTree(data: any, id: string, parent: string): any {
  const tree = Object.fromEntries(
    data.map((n: any) => [n[id], { ...n, children: [] }])
  );

  return Object.values(tree).filter(
    (n) => !(tree[n[parent]] && tree[n[parent]].children.push(n))
  );
}
